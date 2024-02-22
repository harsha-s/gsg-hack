import Link from "next/link";
import 'normalize.css/normalize.css';
// import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/index.module.css';
import { useEffect, useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(30);
  const [username, setUsername] = useState(null);
  const [formUsername, setFormUsername] = useState(null);
  const [merchant, setMerchant] = useState('');
  const [merchants, setMerchants] = useState([]);
  const [newsletter, setNewsletter] = useState(false);
  const [money, setMoney] = useState(0);

  const onMerchantAdd = (name) => {
    if (merchants.includes(name)) {
      return;
    }

    setMerchants([...merchants, name]);
    setMerchant('');
  };

  const onMerchantRemove = (name) => {
    setMerchants(merchants.filter(mer => mer !== name))
  };

  const handleLoginBtnClick = () => {
    if (!formUsername) {
      return;
    }

    localStorage.setItem('username', formUsername);
    setUsername(formUsername);
  };

  const handleLogoutBtnClick = () => {
    localStorage.removeItem('username');
    setUsername(null);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  if (!username) {
    return <main>
      <input type="text" value={formUsername} onChange={(event) => setFormUsername(event.target.value)} placeholder="Username"/>
      <input type="text" value="" placeholder="*******"/>
      <button onClick={handleLoginBtnClick}>Login</button>
    </main>
  }

  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        Hello {username},
        Your money: <span style={{ color: 'green', marginRight: '5px' }}>${money}</span>
        <button onClick={handleLogoutBtnClick}>Logout</button>
      </nav>

      <section>
        <h1>Earn $5 bonus from us</h1>
        <h4>You need to complete the steps below to get your bonus</h4>
        <h3>1. Subscribe to our Newsletter <span className={`${styles.status} ${newsletter ? styles.done : styles.notyet}`}>{newsletter ? 'Done' : 'Not yet'}</span></h3>
        <input id="newsletter" type="checkbox" value={newsletter ? 'checked' : ''} onChange={(event) => setNewsletter(event.target.checked)} />
        <label htmlFor="newsletter">Daily newsletter</label>
        <h3>2. Add your favorite merchants <span className={`${styles.status} ${merchants.length > 0 ? styles.done : styles.notyet}`}>{merchants.length > 0 ? 'Done' : 'Not yet'}</span></h3>
        <input type="text" value={merchant} onKeyDown={(e) => { if (e.key === "Enter") { onMerchantAdd(merchant) }
        }} onChange={(event) => setMerchant(event.target.value)} placeholder="Your favorite merchant" />
        <ul>
          {merchants.map(name =>
            <div className={styles.favoriateMerchant}>
              <span>{name}</span>
              {' '}
              <button onClick={() => onMerchantRemove(name)}>x</button>
            </div>
          )}
        </ul>
        {newsletter && merchants.length > 0 && <button disabled={money >= 5} onClick={() => setMoney(5)}>Claim your $5 bonus</button>}
      </section>
      
      <hr />

      <section>
        <h1>Get your extra bonus</h1>
        <h3>Your purchase value</h3>
        <input type="number" max={100} onChange={(event) => setNumber(+event.target.value)} value={number} />
        <br />
        <p></p>
        <div className={styles.progressBar}>
          <div className={styles.progressBarInner} style={{ width: `${number}%` }}></div>
          <div className={`${styles.firstItem} ${number >= 32 ? styles.active : ''}`} style={{ left: '30%' }}>
          First
          </div>
          <div className={`${styles.secondItem} ${number >= 62 ? styles.active : ''}`} style={{ left: '60%' }}>
          Second
          </div>
          <div className={`${styles.lastItem} ${number >= 92 ? styles.active : ''}`} style={{ left: '90%' }}>
          Last
          </div>
        </div>
      </section>
    </main>
  );
}
