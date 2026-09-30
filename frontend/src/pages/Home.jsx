function Home() {
  return (
    <div className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">
              AI Career Resume Assistant
            </h1>

            <p className="lead text-muted mb-4">
              Build, analyze, and optimize your resume with AI-powered career
              insights.
            </p>

            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-primary btn-lg">
                Create Resume
              </button>

              <button className="btn btn-outline-secondary btn-lg">
                Analyze Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;