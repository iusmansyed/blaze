import React from "react";
import styles from "./index.module.css"
import Button from "../../Components/Button";
const Details = () => {
    return (
        <>
            <section className={styles.Details}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles.heading}>
                                <h1>type you message</h1>
                            </div>
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Email</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Enter Your message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <Button/>
                                {/* <button type="submit" class="btn btn-primary btn-submit">Submit</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Details