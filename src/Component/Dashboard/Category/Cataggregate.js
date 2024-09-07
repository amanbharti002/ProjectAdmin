
import { useEffect, useState } from "react";


export default function Cataggregate(props){
    const[data,setData] = useState()
    useEffect(()=>{
        setData(props.data?.aggreagteData[0].sub_info)

    },[props])
    console.log(data)
    return(
        <>
        <table>
        <thead>
        <tr style={{textAlign:"center"}}>
        <th>Sr no</th>
        <th style={{fontweight:'bold'}}>Category Name</th>
        <th style={{fontweight:'bold'}}>Category Title</th>



        </tr>

        </thead>
        <tbody>
          {
            data?.map((e,pos)=>

              <tr key={pos} style={{textAlign:"center"}} >

             {console.log(e.catsubcatTitle)}

             <td>{pos+1}</td>
             <td style={{cursor:"pointer",margin:"5px"}}>{e.catsubcatName}</td>
             <td style={{cursor:"pointer",margin:"5px"}}>{e.catsubcatTitle}</td>

        </tr>
            )
          }
        </tbody>

        </table>
        
        </>
    )
}