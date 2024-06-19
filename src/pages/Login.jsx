import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Auth from '../apis/Auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ login: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Auth.login(form);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-6 text-center">Login</h2>
        <Input label="Nome de Usuário" type="text" name="login" value={form.login} onChange={handleChange} />
        <Input label="Senha" type="password" name="password" value={form.password} onChange={handleChange} />
        <div className="flex flex-col items-start">
          <Link to={'/register'}><p>Registrar-se</p></Link>
        </div>
        <div className="flex items-center justify-between mt-5">
          <Button text="Entrar" />
        </div>
      </form>
    </div>
  );
};

export default Login;
