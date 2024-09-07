import { LOGO_URL } from '../../../../URL/URL'
import './Header.css'
export default function AdminHeader(){
    return(
        <>
            <div className="AdminHeader">
                <nav className="AdminNav">
                   <div className="LeftDiv">
                    <img src={`${LOGO_URL}file.png`}>
                    </img>
                    <span style={{fontWeight:"bold"}}>AmanMega</span><span>store</span>
                   </div>
                   <div className="RightDiv">Hi Admin</div>
                </nav>
            </div>
        </>
    )
}