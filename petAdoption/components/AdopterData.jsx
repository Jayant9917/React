// AdopterData.jsx
import React from 'react'

const AdopterData = ({ submissions }) => {
  return (
    <div className="table-container">
      <h2>Adoption Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Adopter Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Adoption Date</th>
            <th>Special Requirements</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.phone}</td>
              <td>{submission.petName}</td>
              <td>{submission.petType}</td>
              <td>{submission.petBreed}</td>
              <td>{submission.adoptionDate}</td>
              <td>{submission.specialRequirements || 'None'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdopterData