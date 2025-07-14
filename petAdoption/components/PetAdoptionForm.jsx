import React, { useState } from 'react'
import AdopterData from './AdopterData';

const PetAdoptionForm = () => {
  const[formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petType: "dog",
    petBreed: "",
    adoptionDate: "",
    specialRequirements: ""
  })

  const [submissions, setSubmissions] = useState([])
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name] : value
    })
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmissions([...submissions, formData])
    setFormData({
      name: "",
      email: "",
      phone: "",
      petName: "",
      petType: "dog",
      petBreed: "",
      adoptionDate: "",
      specialRequirements: ""
    })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label htmlFor='name'>Your Name:</label>
          <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          />
          {errors.name && <small>{errors.name}</small>}
        </div>


        {/* Email */}
        <div>
          <label htmlFor='email'>Email:</label>
          <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          />
          {errors.email && <small>{errors.email}</small>} 
        </div>

        {/* Phone */}
        <div>
          <label htmlFor='phone'>Phone Number:</label>
          <input
          type='text'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          />
          {errors.phone && <small>{errors.phone}</small>}
        </div>

        {/* Pet Name */}
        <div>
          <label htmlFor='petName'>Pet Name</label>
          <input
          type='text'
          id='petName'
          name='petName'
          value={formData.petName}
          onChange={handleChange}
          />
          {errors.petName && <small>{errors.petName}</small>}
        </div>

        {/* Pet Type */}
        <div>
          <label htmlFor='petType'>Pet Type:</label>
          <select id='petType' name='petType' value={formData.petType} onChange={handleChange}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Pet Bread */}
        <div>
          <label htmlFor='petBreed'>Breed:</label>
          <input
            type="text"
            id="petBreed"
            name="petBreed"
            value={formData.petBreed}
            onChange={handleChange}
          />
          {errors.petBreed && <small>{errors.petBreed}</small>}
        </div>

        {/* Adoption Data */}
        <div>
          <label htmlFor="adoptionDate">Adoption Date:</label>
          <input
            type="date"
            id="adoptionDate"
            name="adoptionDate"
            value={formData.adoptionDate}
            onChange={handleChange}
          />
          {errors.adoptionDate && <small>{errors.adoptionDate}</small>}
        </div>

        {/* Special Requirements */}
        <div>
          <label htmlFor="specialRequirements">Special Requirements:</label>
          <textarea
            id="specialRequirements"
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
          />
        </div>

        <button type='submit'>Submit Adoption Form</button>
      </form>
      {submissions.length > 0 && <AdopterData submissions={submissions} />}

    </div>
  )
}

export default PetAdoptionForm