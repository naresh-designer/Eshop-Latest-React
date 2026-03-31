
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = lazy(() => import('../../Pages/Home'))
const About = lazy(() => import('../../Pages/About'))
const Product = lazy(() => import('../../Pages/Product'))
const Contact = lazy(() => import('../../Pages/Contact'))
const Details = lazy(() => import('../Details/Details'))
const Error = lazy(() => import('../../Pages/Error'))
const Cart = lazy(() => import('../../Pages/Cart'))
// import Home from '../../Pages/Home'
// import About from '../../Pages/About'
// import Product from '../../Pages/Product'
// import Contact from '../../Pages/Contact'
// import Details from '../Details/Details'
// import Error from '../../Pages/Error'
// import Cart from '../../Pages/Cart'

const Container = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </Suspense>
    </>
  )
}

export default Container