import React from "react";

export default function Step5() {
  return (
    <div>
      {/* step 5 */}
      <div className="head">
        <h4>Parcel Over View</h4>
      </div>
      <div className="step5">
        <table class="package-table">
          <thead>
            <tr>
              <th>Date Issued</th>
              <th>Package Type</th>
              <th>Weight</th>
              <th>Length</th>
              <th>Width</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10 Oct 2024</td>
              <td>Document</td>
              <td>20 kg</td>
              <td>15 ft</td>
              <td>30 ft</td>
              <td>120 ft</td>
            </tr>
            <tr>
              <td>10 Oct 2024</td>
              <td>Document</td>
              <td>20 kg</td>
              <td>15 ft</td>
              <td>30 ft</td>
              <td>120 ft</td>
            </tr>
            <tr>
              <td>10 Oct 2024</td>
              <td>Document</td>
              <td>20 kg</td>
              <td>15 ft</td>
              <td>30 ft</td>
              <td>120 ft</td>
            </tr>
          </tbody>
        </table>
        <div className="head headtop">
          <h4>Source & Destination Information</h4>
        </div>
        <div class="info-cards">
          <div class="info-card">
            <h3>Source Information</h3>
            <p>
              <strong>Name:</strong> John
            </p>
            <p>
              <strong>City:</strong> Birmingham
            </p>
            <p>
              <strong>Address:</strong> 369 Chestnut Grove, London
            </p>
            <p>
              <strong>Phone Number:</strong> 0141 123 4567
            </p>
          </div>
          <div class="info-card">
            <h3>Destination Information</h3>
            <p>
              <strong>Name:</strong> John
            </p>
            <p>
              <strong>City:</strong> Birmingham
            </p>
            <p>
              <strong>Address:</strong> 369 Chestnut Grove, London
            </p>
            <p>
              <strong>Phone Number:</strong> 0141 123 4567
            </p>
          </div>
        </div>
        <div className="head headtop">
          <h4>Via's Detail</h4>
        </div>
        <table class="via-table">
          <thead>
            <tr>
              <th>Via's</th>
              <th>Package Type</th>
              <th>Weight</th>
              <th>Length</th>
              <th>Width</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Via 1</td>
              <td>Document</td>
              <td>20 kg</td>
              <td>15 ft</td>
              <td>30 ft</td>
              <td>120 ft</td>
            </tr>
            <tr>
              <td>Via 2</td>
              <td>Document</td>
              <td>20 kg</td>
              <td>15 ft</td>
              <td>30 ft</td>
              <td>120 ft</td>
            </tr>
            <tr>
              <td>Via 3</td>
              <td>Document</td>
              <td>20 kg</td>
              <td>15 ft</td>
              <td>30 ft</td>
              <td>120 ft</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
