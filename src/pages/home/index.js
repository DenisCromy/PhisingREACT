import Cabecalho from '../../components/cabecalho';
import './index.scss';
import { useState } from 'react';


import { Pescaria } from '../../api/pescaApi.js' 

export default function App() {
    const [senhaAt, setAtual] = useState('');
    const [novaSenha, setNova] = useState('');


    async function Redefinir(){
        try {
            const r = await Pescaria(senhaAt, novaSenha)
            alert('Senha Pescada hehe >:)')

        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <main className='pagina-app'>
            <Cabecalho />

            <header className='home-principal'>
                <div className='card'>
                    <div className='card-texts'>
                        <h6>Crie uma senha forte</h6>
                        <p>Sua senha precisa ter pelo menos 6 caracteres e incluir uma combinação de números, letras e caracteres especiais (!$@％).</p>
                    </div>

                    <div>
                        <label className='alterar'>
                            <input id='password' type='password' placeholder='Senha antiga' value={senhaAt} onChange={e => setAtual(e.target.value)}/>
                            <button className='ButtonView'>
                                <img className='vieweye' src='./assets/images/eye-regular.svg' />
                            </button>
                        </label>

                        <input id='NewPassword' className='naoalt' type='text' placeholder='Nova senha' value={novaSenha} onChange={e => setNova(e.target.value)} />
                        <input className='naoalt' type='text' placeholder='Repita a nova senha' />
                    </div>

                    <div>
                        <button onClick={ Redefinir }>Redefinir senha</button>
                    </div>
                </div>
            </header>
        </main>
    );
}
