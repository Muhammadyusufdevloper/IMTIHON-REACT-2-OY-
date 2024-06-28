import { memo, useEffect, useState } from "react"
import { IoIosEye, IoIosEyeOff } from "react-icons/io"
import { useGetValue } from "../../hooks/useGetValue"
import "./Login.scss"
import { useSignInMutation } from "../../context/api/user-api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setToken } from "../../context/slices/authSlice"
const initialState = {
    username: "mor_2314",
    password: "83r5^_"
}
const Login = () => {
    const [eye, setEye] = useState(false)
    const { formData, handleChange } = useGetValue(initialState)
    const [signIn, { data, isLoading, isSuccess, isError }] = useSignInMutation()
    console.log(data);
    let navigate = useNavigate()
    let dispatch = useDispatch()
    useEffect(() => {
        if (isSuccess) {
            dispatch(setToken(data?.token))
            navigate("/admin")
        }
        if (isError) {
            toast.error("password yoki username noto'g'ri iltimos qayta kiriting")
        }
    }, [isSuccess, isError])
    const handelLogin = (e) => {
        e.preventDefault()
        signIn(formData)
    }
    return (
        <>
            <section className="login">
                <div className="container login__wrapper">
                    <form onSubmit={handelLogin} className="login__form">
                        <div className="login__input-card">
                            <label htmlFor="username">Username</label>
                            <input value={formData.username} type="text" onChange={handleChange} id="username" placeholder="Enter your username" />
                        </div>
                        <div className="login__input-card">
                            <label htmlFor="password">Password</label>
                            <div className="login__password-input-eye">
                                <input value={formData.password} onChange={handleChange} type={eye ? "text" : "password"} id="password" placeholder="Enter your password" />
                                <button type="button" onClick={() => setEye(p => !p)}>
                                    {
                                        eye ?
                                            <IoIosEyeOff />
                                            :
                                            <IoIosEye />
                                    }
                                </button>
                            </div>
                        </div>
                        <button className="login__form-button">
                            LOGIN
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default memo(Login)