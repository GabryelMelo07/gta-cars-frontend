import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Auth from '../apis/Auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ login: '', password: '', nome: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Auth.register(form);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-6 text-center">Cadastro</h2>
        <Input label="Login" type="text" name="login" value={form.login} onChange={handleChange} />
        <Input label="Senha" type="password" name="password" value={form.password} onChange={handleChange} />
        <Input label="Nome" type="text" name="nome" value={form.nome} onChange={handleChange} />
        <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
        <div className="flex items-center justify-between">
          <Button text="Cadastrar" />
        </div>
      </form>
    </div>
  );
};

export default Register;
