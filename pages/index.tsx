import React from 'react';
import MaterialTable from 'material-table';

const Home = () => {
  return (
    <div>
      <MaterialTable
        columns={[
          { title: 'First Name', field: 'firstName' },
          { title: 'Last Name', field: 'Last Name' },
          { title: 'Email', field: 'email' },
          { title: 'City', field: 'city' },
          { title: 'State', field: 'state' }
        ]}
        data={[
          {
            firstName: 'Dawson',
            lastName: 'Hansen',
            email: 'Allene.McGlynn23@yahoo.com',
            city: 'Simonisbury',
            state: 'New Jersey'
          },
          {
            firstName: 'Daron',
            lastName: 'Crona',
            email: 'Douglas36@hotmail.com',
            city: 'Kingfort',
            state: 'Iowa'
          },
          {
            firstName: 'Bernadine',
            lastName: 'Langworth',
            email: 'Oswaldo_Stark@hotmail.com',
            city: 'Karinetown',
            state: 'North Dakota'
          },
          {
            firstName: 'Jedidiah',
            lastName: 'Huels',
            email: 'Schuyler.Russel0@hotmail.com',
            city: 'North Magali',
            state: 'North Carolina'
          },
          {
            firstName: 'June',
            lastName: 'Ryan',
            email: 'Louisa81@yahoo.com',
            city: 'Treutelhaven',
            state: 'South Dakota'
          },
          {
            firstName: 'Maddison',
            lastName: 'Vandervort',
            email: 'Chadrick21@gmail.com',
            city: 'Lysanneview',
            state: 'New Jersey'
          },
          {
            firstName: 'Kristopher',
            lastName: 'Zemlak',
            email: 'Rico_Runolfsson92@hotmail.com',
            city: 'South Odessa',
            state: 'Indiana'
          },
          {
            firstName: 'Teagan',
            lastName: 'Schroeder',
            email: 'Abdiel_Romaguera@yahoo.com',
            city: 'Willmschester',
            state: 'California'
          },
          {
            firstName: 'Stevie',
            lastName: 'Schowalter',
            email: 'Garret19@hotmail.com',
            city: 'Madalynstad',
            state: 'Montana'
          },
          {
            firstName: 'Zakary',
            lastName: 'Tromp',
            email: 'Javon.Wehner@hotmail.com',
            city: 'North Samantha',
            state: 'Texas'
          }
        ]}
      />
    </div>
  );
};

export default Home;
