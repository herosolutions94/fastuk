import React from 'react'

export default function Step6() {
  return (
    <div>
        {/* step 6 */}
        <div className="head step6">
        <h4>Handling Charge Agreement</h4>
        <p>Handling charges include, such as loading, unloading, and any manual assistance required during the job.</p>
      </div>
      <div className='check-flex'>
        <input type="checkbox" />
        <label>I agree to accept handling charges for manual labor during delivery</label>
      </div>
    </div>
  )
}
