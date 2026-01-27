"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    academicYear: "",
    mobile: "",
    reason: "",
    university: "",
    gender: "",
    city: "",
    practicalKnowledge: "",
    mistakes: "",
    agreeGuidance: "",
    agreeRespect: "",
    agreeReview: "",
    confirmation: false,
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-6 space-y-5"
      >
        <h1 className="text-2xl font-semibold text-center">
          Department Expert – HostelsKit
        </h1>

        <input className="input" name="name" placeholder="Name" required onChange={handleChange} />
        <input className="input" name="course" placeholder="Course" required onChange={handleChange} />
        <input className="input" name="academicYear" placeholder="Academic Year" required onChange={handleChange} />
        <input className="input" name="mobile" placeholder="Mobile Number" required onChange={handleChange} />
        <input className="input" name="university" placeholder="University Name" required onChange={handleChange} />
        <input className="input" name="city" placeholder="City" required onChange={handleChange} />

        <textarea className="input" name="reason" placeholder="Why do you want to become a Department Expert?" required onChange={handleChange} />
        <textarea className="input" name="practicalKnowledge" placeholder="What practical knowledge can you share?" required onChange={handleChange} />
        <textarea className="input" name="mistakes" placeholder="Common mistakes new students make" required onChange={handleChange} />

        <select name="gender" className="input" required onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>

        <div className="space-y-2">
          <label>Do you agree to provide honest guidance?</label>
          <select name="agreeGuidance" className="input" required onChange={handleChange}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="space-y-2">
          <label>Maintain respectful communication?</label>
          <select name="agreeRespect" className="input" required onChange={handleChange}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="space-y-2">
          <label>Allow HostelsKit to review interactions?</label>
          <select name="agreeReview" className="input" required onChange={handleChange}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="space-y-2">
          <label>Upload verification document (PDF/Image)</label>
          <input type="file" accept="image/*,.pdf" required onChange={handleFileChange} />
        </div>

        <label className="flex items-center gap-2">
          <input type="checkbox" name="confirmation" required onChange={handleChange} />
          I confirm that the information provided is accurate
        </label>

        <p className="text-sm text-gray-500">
          This form is an expression of interest. Submission does not guarantee selection.
        </p>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
        >
          Submit Application
        </button>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #ddd;
        }
      `}</style>
    </div>
  );
}


