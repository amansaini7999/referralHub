import React from 'react';
import ButtonStyle from '.././cards/EditProfile/styles/FormStyle/style.module.css'
import ResumeCard from './ResumeCard';
import styles from './Styles/style.module.css'

const arr=[
    {
        Name: "Ramesh Agarwal",
        Email:"xyz@gmail.com",
        Phone: "9876543210",
        Company:"Uber",
        JobID:"1423554",
        JobLink: "www.Uber.com",
        Resume: "bily.com/xyz",
        Id : '1'
    },
    {
        Name: "Ramesh Agarwal",
        Email:"xyz@gmail.com",
        Phone: "9876543210",
        Company:"Uber",
        JobID:"1423554",
        JobLink: "www.Uber.com",
        Resume: "bily.com/xyz",
        Id : '2'
    },
    {
        Name: "Ramesh Agarwal",
        Email:"xyz@gmail.com",
        Phone: "9876543210",
        Company:"Uber",
        JobID:"1423554",
        JobLink: "https://auth.uber.com/login/?breeze_local_zone=phx5&next_url=https%3A%2F%2Fm.uber.com%2F&state=N-XNakwRlac40kvxxzBBA8oD3AY75gePiH4oDtC50OY%3D",
        Resume: "bily.com/xyz",
        Id : '3'
    }
];

function fun()
{
    console.log("button Clicked");
}

const OpenResumes = () => {
  return <div className={styles.mainCard} >{arr.map(obj=><ResumeCard key={obj.Id} obj={obj}/>)}
        <div style={{textAlign: "center"}}>
                    <button className={ButtonStyle.submitButton} onClick={fun}>
                        See more
                    </button>
                </div>
    </div>;
};

export default OpenResumes;
