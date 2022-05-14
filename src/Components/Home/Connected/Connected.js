import React from 'react';


const Connected = () => {

    const handleSubmit = e => console.log(e);

    return (
        <section className="home-bg mt-5 pt-5">
            <main className="container ">
                <div className="text-center">
                    <h6 style={{ fontWeight: '500' }} className="custom-primary"> CONNECT US</h6>
                    <h2 className="text-white mt-1">Always Connect with us</h2>
                </div>

                <div className='row'>
                    <div className="col-md-7 col-sm-4 m-auto">
                        <div className="p-5">
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <input type="email" name="email" class="form-control border-0" placeholder="your email" />
                                </div>
                                <div class="mb-3">
                                    <input type="text" name="subject" class="form-control border-0" placeholder="subject" />
                                </div>
                                <div class="mb-3">
                                    <textarea type="text" name="message" class="form-control border-0" rows="4">your message </textarea>
                                </div>
                                <div class="mb-3 text-center">
                                <input type="submit" className="form-control border-0 btn btn-info" value="Send"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Connected;