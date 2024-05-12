import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navbar from "../../components/NewNavbar.js/NewNavbar";
import "../../Assets/css/Gallery.css";

const Gallery = () => {
    const images = [
        "https://lh3.googleusercontent.com/u/0/d/1gKsCe90Y1wKTTcJgOtumPj64x69RoZpU",
        "https://lh3.googleusercontent.com/u/0/d/1OmULfnDYAzUMvnZ18HGHo3RFuFxLwW7N",
        "https://lh3.googleusercontent.com/u/0/d/1McNvOKaauvc-DGbjxHbOXPYd6XZU82O4",
        "https://lh3.googleusercontent.com/u/0/d/1JhHfZLLyhu2pddqTTGgNotPXbDl5zKCo",
        "https://lh3.googleusercontent.com/u/0/d/1JkDTPQu27T21d3Kk2CWh8ijavRzDCUyU",
        "https://lh3.googleusercontent.com/u/0/d/1Jmnjhj2byIZEXzugDhVd3PQKBMWlLByj",
        "https://lh3.googleusercontent.com/u/0/d/1JnuuG-snLa4dXrS5zfxpVMBUJaveTbkw",
        "https://lh3.googleusercontent.com/u/0/d/1JpuniGPeZNeQI-AebGjTVQBqIn1jrXjE",
        "https://lh3.googleusercontent.com/u/0/d/1Jt6cQ-NOUlzfQ9kwckpwYwWBTqZFpmwP", 
        "https://lh3.googleusercontent.com/u/0/d/1K3-do_N3wUIKq1_kJIwpHkqrlxPInpI0",
        "https://lh3.googleusercontent.com/u/0/d/1KAh6kfvGNshlEIAbB8fUeh4eKXAtm6SO", 
        "https://lh3.googleusercontent.com/u/0/d/1KEMoF6Wx_OrXIrQrfVu9h5najVPOPqNo",
        "https://lh3.googleusercontent.com/u/0/d/1KG__4Zp8wQGUeoYnTyF5N7d_reKt1MF-", 
        "https://lh3.googleusercontent.com/u/0/d/1KP1_O1l9xXcCbn-8e9kZqpPazchnnwam",
        "https://lh3.googleusercontent.com/u/0/d/1KKRn6Dvy4nu-CHjTTM2yi4Fm-sLXJhkH", 
        "https://lh3.googleusercontent.com/u/0/d/1KPkGdT9qRFNw-ct5SkM8tnRsYiKmiijd",
        "https://lh3.googleusercontent.com/u/0/d/1KXfJH5SEEOV0ydPmbbdSZdaPcCKLOOaF",
        "https://lh3.googleusercontent.com/u/0/d/1Kcc7yS6U6Odixn8kEPSXXH9PbyohWC4l",
        "https://lh3.googleusercontent.com/u/0/d/1KcmhECO2mLjKKjwIBTYvjT_iR7-U4VVv",
        "https://lh3.googleusercontent.com/u/0/d//1J495tpVCOCnI2NA8jaiWKidUsNOm51l2",
        "https://lh3.googleusercontent.com/u/0/d/1KeAPg3BIKND6-QqV3aV117W_RitePuFt",
        "https://lh3.googleusercontent.com/u/0/d/1vSGD1z3_TkZkiiAJJ6f_-CI5_QsaMb2C",
        "https://lh3.googleusercontent.com/u/0/d/1ePNSqcpCvgdHui3zuccF1kOzQ6Ay2Tcb",
        "https://lh3.googleusercontent.com/u/0/d/14-sUETZETqmZiIKV29FfUkva7SsyKTTR",
        "https://lh3.googleusercontent.com/u/0/d/1_xXBaDyNxH9ycEYcn7R2Q_eeI5YIW7Zr",
        "https://lh3.googleusercontent.com/u/0/d/1JWoZMC0hLjC4bvhTDMZnkDSa0kqcolZA",
        "https://lh3.googleusercontent.com/u/0/d/189N7kd8aV4QJJv0OLBUiaWH4TWUVW0Rq",
        "https://lh3.googleusercontent.com/u/0/d/1mPsGIFaRsn2_xb8LQhe_h4j5b4vSY0mO",
        "https://lh3.googleusercontent.com/u/0/d/1hs4t6tRmb2ckxnbwi4jebPcrgrM0vtk5",
        "https://lh3.googleusercontent.com/u/0/d/1vww6beyhFDGVq0nYxJofBswDH_4vEWEp",
        "https://lh3.googleusercontent.com/u/0/d/1842k1HVJ8yU39AqM-OP24-_f3KHz4bpL",
        "https://lh3.googleusercontent.com/u/0/d/1n9T_6WPCOzvpXDWG-kGE7ot7i_V_UH2I",
        "https://lh3.googleusercontent.com/u/0/d/1Vv3CA20MOfamtT0MLiB_W58t7sFFx6l3",
        "https://lh3.googleusercontent.com/u/0/d/137ahm2avJ0UF5lKtezHI_Ut4OaYEqA1p",
        "https://lh3.googleusercontent.com/u/0/d/183VonfPyXxKhiE7hnUQT2LyalioyO6o5",
        "https://lh3.googleusercontent.com/u/0/d/1KdkFlPSfB7tPzm7uacVjMR-3V03dQewM",
        "https://lh3.googleusercontent.com/u/0/d/1BpU-ukDkVl_LYaQEpcle7x0q8RWnOa6U",
    ]

    return (
        <>
            <div className="gallery-navbar">
                <Navbar />
            </div>
            <div className="grid-container">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
                    <Masonry gutter="20px">
                        {images.map((image, i) => (
                            <img key={i} src={image} style={{ width: "100%", display: "block" }} alt="" />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    )
}

export default Gallery;