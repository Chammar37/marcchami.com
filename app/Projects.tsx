const Projects = () => {
    return (
        <div className="flex-col space-y-4"> Projects >
            <div className="ml-3/20 mr-3/20 text-primary ">
                <p> [Album Recommender]</p>
                <div className="justified">
                    <p> A website used for suggesting albums through clicks for an intuitive user interface.</p>
                    <button disabled className="px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border">
                        svelte.js
                    </button>
                    <button disabled type="button" className="px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border">
                        java spring
                    </button>              
                </div>          
            </div>
            <div className="ml-3/20 mr-3/20 text-primary" >
                <p>[interviewprep.ai]</p>
                <div className="justified">
                    <p> A web app designed to assist job hunters in interview prep.</p>
                    <p> By inputting a few pieces of relevant details, the app simulates a 
                    realistic interview meeting experience, using speech software to ask questions. 
                    KSAO model alongside other technical queries to offer comprehensive sessions. </p>
                    <button disabled className="px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border">
                    next.js
                    </button>
                    <button disabled className="px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border">
                    python flask
                    </button>
                    <button disabled className="px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border">
                    LLM training
                    </button>
                </div>    
            </div>

            <div className="ml-3/20 mr-3/20 text-primary ">
                <p> [Scrap.it]</p>
                <div className="justified">
                    <p> Utilizing any camera to identify ingredients and generate with recipes.</p>
                    <button disabled className="px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border">
                    next.js                    
                    </button>
                    <button disabled className="px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border">
                    LLM training
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Projects