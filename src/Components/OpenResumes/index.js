import React, {useState, useEffect} from 'react';
import ButtonStyle from '.././cards/EditProfile/styles/FormStyle/style.module.css'
import ResumeCard from './ResumeCard';
import styles from './Styles/style.module.css';
import { withRouter,useHistory } from 'react-router-dom';
import { getReferral } from '../../api/referral';
import ReactLoading from 'react-loading'
import LoadingStyles from '../OpenJobs/Styles/style.module.css'


const OpenResumes = (props) => {
    const search = props.location.search;
    const comp = new URLSearchParams(search).get('company');
    const jobId = new URLSearchParams(search).get('jobId');
    const lastInd = new URLSearchParams(search).get('lastInd');
    const emptyContent = {data: [],hasNext: 0, lastId:""};
    const [content,setContent] = useState(emptyContent);
    let history = useHistory();

    // const [compQ, setCompQ] = useState("");
    const [loading,setLoading] = useState(true);


    useEffect(() => {
        setContent(emptyContent);
        setLoading(true);
        // console.log("done");
        getReferral(comp,jobId,lastInd).then((res) => {
            if(!res)
            {
                setContent(emptyContent);
            }
            else{
                setContent(res);
            }
            // console.log(res);
            setLoading(false);
        })
    },[search])
    
    function fun()
    {
        if(content.company)
            history.push(`/referral/?company=${content.company}&lastInd=${content.lastId}`);
        else
            history.push(`/referral/?jobId=${content.jobId}&lastInd=${content.lastId}`)
        // console.log("pushed");
        window.scrollTo(0, 0);
        setContent(emptyContent);
    }

    // function qerySubmit (e) {
    //     console.log(compQ);
    //     e.preventDefault();
    //     history.push(`/referral/?company=${compQ}`);
    //     setCompQ("");
    // }

    return <div className={styles.mainCard} >
        {/* <form className={styles.topForm} onSubmit={qerySubmit}>
            <input className={styles.topInput} type="text" value={compQ} onChange={(e)=>setCompQ(e.target.value)} placeholder={"Enter Company name"}/>
            <Button type={"submit"}>Search</Button>
        </form> */}
        {!loading?content.data.length>0?content.data.map(obj=><ResumeCard token={props.token} key={obj.Id} obj={obj}/>):<div style={{textAlign: "center"}}>No data</div>:<ReactLoading className={LoadingStyles.loading} type="bars" color="black" height={667} width={375} />}
        <div style={{textAlign: "center"}}>
                    {content.hasNext?<button className={ButtonStyle.submitButton} onClick={fun}>
                        See more
                    </button>:null} 
                </div>
    </div>;
};

export default withRouter(OpenResumes);
