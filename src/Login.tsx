const Login = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#1c1c1c",
        margin: 0,
        padding: 0,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#3e3e3e",
          borderRadius: "8px",
          padding: "30px",
          width: "300px",
        }}
      >
        <h2
          style={{
            color: "#0063f8",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Login
        </h2>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            placeholder="Email"
            style={{
              marginBottom: "15px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid black",
              backgroundColor: "#d8d8d8",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              marginBottom: "15px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid black",
              backgroundColor: "#d8d8d8",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#1b81da",
              color: "#fff",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
