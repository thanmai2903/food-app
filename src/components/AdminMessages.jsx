const AdminMessages = () => {
  const messages =
    JSON.parse(localStorage.getItem("messages")) || [];

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">
        📊 Admin Messages Dashboard
      </h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet</p>
      ) : (
        messages.map((msg, i) => (
          <div
            key={i}
            className="border p-3 rounded-lg mb-2"
          >
            <p><b>Name:</b> {msg.name}</p>
            <p><b>Email:</b> {msg.email}</p>
            <p><b>Message:</b> {msg.message}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminMessages;