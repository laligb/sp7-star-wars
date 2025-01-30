function LoginPage() {
  return (
    <div className="d-flex justify-content-center">
      <form className="p-5" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label text-white "
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-white">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-white"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            className="form-check-label text-white"
            htmlFor="exampleCheck1"
          >
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
