const Projects = () => {
    return (
        <div className="flex-col space-y-4 text-primary"> <span> Projects > </span>
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
                <p> [NBA Player Analytics]</p>
                <div className="justified">
                    <p> Study the best NBA player's in the world, analyze their data to discover meaningful statistics and predictions via networks and graphing algorithms. Visualizing any player's production trends, play-styles, influence, and other weighted values.</p>
                    <button disabled className="px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border">
                    python
                    </button>
                    <button disabled className="px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border">
                    graphing
                    </button>
                    
                    <button disabled className="px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border">
                    networkx
                    </button>
                    
                    <form target="_blank" action="https://github.com/Chammar37/NBA-Analytics/blob/main/Project.pdf">
                        <button className="flex px-2 me-2 mb-2 text-xs outline-none bg-white rounded-lg border" >
                        <span className="mr-2"> Project.pdf  </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#6c848d" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="#6c848d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </button>
                    </form>
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