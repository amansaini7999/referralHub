import React from 'react';
import JobCard from './JobCard';
import styles from './Styles/style.module.css';
import {useState,useEffect} from 'react'
import ButtonStyle from '.././cards/EditProfile/styles/FormStyle/style.module.css';
import { getJobList } from '../../api/jobListing';
import { withRouter,useHistory } from 'react-router-dom';

import ReactLoading from 'react-loading';





const OpenJobs = (props) => {
    const search = props.location.search;
    const lastIdUrl = new URLSearchParams(search).get('lastjobid');
    let history = useHistory();
    // console.log(lastIdUrl);
    const emptyContent = {data: [],hasNext: 0, lastId:""};
    const [content,setContent] = useState(emptyContent);
    useEffect(() => {
        setContent(emptyContent);
        // console.log("done");
        getJobList(lastIdUrl).then((res) => {
            setContent(res);
            console.log(res);

        })
    },[lastIdUrl])

    const fun = () => {
        history.push(`/q?lastjobid=${content.lastId}`);
        // console.log("pushed");
        window.scrollTo(0, 0);
        setContent(emptyContent);
    }
  return <div className={styles.mainCard}>{content.data.length?content.data.map(obj=><JobCard token={props.token} key={obj.id} obj={obj}/>):<ReactLoading className={styles.loading} type="bars" color="black" height={667} width={375} />}
                <div style={{textAlign: "center"}}>
                    {content.hasNext?<button className={ButtonStyle.submitButton} onClick={fun}>
                        See more
                    </button>:null}
                </div>
        </div>;
};

export default withRouter(OpenJobs);
