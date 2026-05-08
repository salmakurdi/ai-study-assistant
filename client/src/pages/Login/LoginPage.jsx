import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useAuth } from '../../hooks/useAuth';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(form);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return <Card className="mx-auto max-w-md"><h1 className="mb-4 text-xl font-semibold">Login</h1><form onSubmit={onSubmit} className="space-y-3"><input className="w-full rounded border p-2" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/><input type="password" className="w-full rounded border p-2" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>{error && <p className="text-sm text-red-600">{error}</p>}<Button type="submit">Sign in</Button></form></Card>;
}
