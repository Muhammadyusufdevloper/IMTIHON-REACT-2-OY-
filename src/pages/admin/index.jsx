import { memo } from "react";

import "./Admin.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../context/slices/authSlice";

const Admin = () => {
    let dispatch = useDispatch()
    const handelLogout = () => {
        dispatch(logout("x-auth-token"))
    }
    return (
        <section className="admin">
            <div className="container">
                <h1>Admin panel</h1>
                <div className="admin__box">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur cupiditate inventore, deserunt magnam provident dolores
                        blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
                        laudantium quam deleniti id consequatur. Minus delectus officia unde
                        quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
                        quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur cupiditate inventore, deserunt magnam provident dolores
                        blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
                        laudantium quam deleniti id consequatur. Minus delectus officia unde
                        quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
                        quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur cupiditate inventore, deserunt magnam provident dolores
                        blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
                        laudantium quam deleniti id consequatur. Minus delectus officia unde
                        quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
                        quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
                    </p>
                    <div>
                        <button onClick={handelLogout}>Log Out</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Admin);