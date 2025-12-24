import { Button } from "@/components/ui/button.jsx";
import { Routes, Route } from "react-router-dom";
import Products from "@/pages/Products.jsx";
import AppLayout from "@/layouts/AppLayout.jsx";
import Orders from "@/pages/Orders.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path='/' element={<Products />} />
                <Route path='/products' element={<Products />} />
                <Route path='/orders' element={<Orders />} />
            </Route>
        </Routes>
    );
}
