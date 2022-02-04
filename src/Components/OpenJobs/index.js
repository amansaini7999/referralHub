import React from 'react';
import JobCard from './JobCard';
import styles from './Styles/style.module.css';
import ButtonStyle from '.././cards/EditProfile/styles/FormStyle/style.module.css';


const arr=[
    {
        JobGiver: "Ramesh Agarwal",
        JobGiverPosition:"SDE Paytm",
        Company:"Uber",
        JobID:"1423554",
        JobLink: "www.Uber.com",
        JobDecs: "This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description",
        Id : '1'
    },
    {
        JobGiver: "Ramesh Agarwal",
        JobGiverPosition:"SDE Paytm",
        Company:"Uber",
        JobID:"1423554",
        JobLink: "www.Uber.com",
        JobDecs: "This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description",
        Id : '2'
    },
    {
        JobGiver: "Ramesh Agarwal",
        JobGiverPosition:"SDE Paytm",
        Company:"Uber",
        JobID:"1423554",
        JobLink: "https://auth.uber.com/login/?breeze_local_zone=phx5&next_url=https%3A%2F%2Fm.uber.com%2F&state=N-XNakwRlac40kvxxzBBA8oD3AY75gePiH4oDtC50OY%3D",
        JobDecs: "This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description This is Job description",
        Id : '3'
    }
];

function fun()
{
    console.log("button clicked");
}

const OpenJobs = () => {
  return <div className={styles.mainCard}>{arr.map(obj=><JobCard key={obj.Id} obj={obj}/>)}
                <div style={{textAlign: "center"}}>
                    <button className={ButtonStyle.submitButton} onClick={fun}>
                        See more
                    </button>
                </div>
        </div>;
};

export default OpenJobs;
