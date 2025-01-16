"use client"

export default function Parallax() {
    return (
        <>
            <style>{`
            html {
               scroll-snap-type: y mandatory;
           }
   
           .img-container {
               height: 100vh;
               scroll-snap-align: start;
               display: flex;
               justify-content: center;
               align-items: center;
               position: relative;
           }
   
           .img-container > div {
               margin: 20px;
               background: #f5f5f5;
               overflow: hidden;
           }
   
           .img-container img {
               width: 80vw;
               height: 80vh;
           }
   
           .img-container h2 {
               color: var(--accent);
               margin: 0;
               font-family: JetBrains Mono, monospace;
               font-size: 50px;
               font-weight: 700;
               letter-spacing: -3px;
               line-height: 1.2;
               position: absolute;
               display: inline-block;
               top: calc(50% - 25px);
               left: calc(50% + 120px);
           }
   
           .progress {
               position: fixed;
               left: 0;
               right: 0;
               height: 5px;
               background: var(--accent);
               bottom: 50px;
               transform: scaleX(0);
           }
       `}</style>
            <div id="example">
                <section className="img-container">
                    <div>
                        <img src="https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <h2>#001</h2>
                    </div>
                </section>
                <section className="img-container">
                    <div>
                        <img src="https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <h2>#002</h2>
                    </div>
                </section>
                <section className="img-container">
                    <div>
                        <img src="https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <h2>#003</h2>
                    </div>
                </section>
                <section className="img-container">
                    <div>
                        <img src="https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <h2>#004</h2>
                    </div>
                </section>
                <section className="img-container">
                    <div>
                        <img src="https://images.unsplash.com/photo-1735542214686-a745d3684c39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <h2>#005</h2>
                    </div>
                </section>
                <div className="progress"></div>
            </div>
        </>
    )
}

