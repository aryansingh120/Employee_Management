// EditEmployeeProfile.jsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EditEmployeeProfile({ initialData, onSubmit }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // yeh API call ya local update trigger karega
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
        <Input name="position" value={formData.position} onChange={handleChange} placeholder="Position" />
        <Input name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
        <Input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
        <Input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
        <Input name="managerName" value={formData.managerName} onChange={handleChange} placeholder="Manager Name" />
        <Input name="joinDate" value={formData.joinDate} onChange={handleChange} placeholder="Join Date" type="date" />
        <Input name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Employee ID" disabled />
        <Input name="totalTime" value={formData.totalTime} onChange={handleChange} placeholder="Experience" />

        <div className="col-span-full flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
