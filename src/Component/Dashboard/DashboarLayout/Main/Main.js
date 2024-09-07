import './Main.css'; // Import CSS file at the top
import AdminHeader from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Main({children}) {
    return (
        <>
           
            <AdminHeader />
                {children}
            {/* <Footer /> */}
        </>
    );
}
