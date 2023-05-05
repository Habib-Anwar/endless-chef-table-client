import React, { useEffect, useState }  from 'react';
import ChefCard from './ChefCard';

const ChefInfo = () => {

  const [informations, setInformations] = useState([]);

  useEffect(() => {
      fetch('https://endless-chef-table-server-tauft-aolcom.vercel.app/chef')
      .then(res => res.json())
      .then(data => setInformations(data))
      .catch(error => console.error(error))
  }, [])
 
    return (
      <div>
       <h3 style={{marginLeft:"550px"}}>Our Chefs</h3>
        <div>
            {
                informations.map(information => 
                <ChefCard key={information._id}
                information = {information}
                ></ChefCard>)
            }
        </div>
      </div>
    );
};

export default ChefInfo;