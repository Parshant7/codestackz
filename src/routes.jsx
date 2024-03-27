import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/root/root'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import Aboutus from './pages/Aboutus'
import Webdev from './pages/webdev'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contactus",
                element: <Contactus />
            },
            {
                path: "/aboutus",
                element: <Aboutus />
            },
            {
                path:"/services/webdevelopment",
                element: <Webdev />
            }
        ]
    }
])




  // const [pageTitle,setTitle] = useState('Homed | codestackz.in');
  // const changePageTitle = (title) => {
  //   setTitle(title+" | codestackz");
  // }
  // // const loc = useLocation();
  // useEffect(()=>{
  //   document.title=pageTitle;
  // },[pageTitle])


const GetRoutes = () => {
    return (
        <>
            <RouterProvider router={router}>
            </RouterProvider>
        </>
    )
}

export default GetRoutes;