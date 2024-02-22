import 'normalize.css/normalize.css';
// import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/index.module.css';
import { useEffect, useState } from "react";
// import retailers from '../test/API/mock_be_retailers.json';

const endpoint = 'https://deep-coyote-wired.ngrok-free.app';

export default function Home() {
  const [number, setNumber] = useState(30);
  const [user, setUser] = useState(null);
  const [merchant, setMerchant] = useState('');
  const [merchants, setMerchants] = useState([]);
  const [newsletter, setNewsletter] = useState(false);
  const [retailers, setRetailers] = useState([]);

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

  const onPurchaseBtnClick = async (retailer = {}, isBonus) => {
    const data = {
      ...retailer,
      userId: user.id,
      transactionType: isBonus ? 'bonus' : 'transaction',
    };

    try {
      const res = await fetch(`${endpoint}/ledger/create`, {
        method: 'POST',
        headers: {
          "ngrok-skip-browser-warning": "test",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }
      );
      const result = await res.json();
      console.log(result);
      fetchUserData();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await fetch(`${endpoint}/user/detail`, {
        headers: {
          "ngrok-skip-browser-warning": "test",
        }
      }
      );
      const result = await res.json();
      console.log(result);
      setUser(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const fetchRetailers = async () => {
      try {
        const res = await fetch(`${endpoint}/retailer/list`, {
          headers: {
            "ngrok-skip-browser-warning": "test",
          }
        }
        );
        const results = await res.json();
        console.log(results);
        setRetailers(results);
      } catch (e) {
        console.error(e);
      }
    };

    fetchUserData();
    fetchRetailers();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        Hello <strong>{user.name}</strong>,
        your wallet: <span style={{ color: 'green', marginRight: '5px' }}>${user.wallet}</span>
      </nav>

      <section>
        <h1>Earn $5 bonus from us</h1>
        <h4>You need to complete the steps below to get your bonus</h4>
        <h3><span className={styles.number}>1</span>Subscribe to our Newsletter <span className={`${styles.status} ${newsletter ? styles.done : styles.notyet}`}>{newsletter ? 'Done' : 'Not yet'}</span></h3>
        <input id="newsletter" type="checkbox" value={newsletter ? 'checked' : ''} onChange={(event) => setNewsletter(event.target.checked)} />
        <label htmlFor="newsletter"> Daily newsletter</label>
        <h3><span className={styles.number}>2</span>Add your favorite merchants <span className={`${styles.status} ${merchants.length > 0 ? styles.done : styles.notyet}`}>{merchants.length > 0 ? 'Done' : 'Not yet'}</span></h3>
        <input type="text" value={merchant} onKeyDown={(e) => { if (e.key === "Enter") { onMerchantAdd(merchant) }
        }} onChange={(event) => setMerchant(event.target.value)} placeholder="Your favorite merchant" />
        <div style={{ marginTop: '10px' }}>
          {merchants.map(name =>
            <div className={styles.favoriateMerchant} key={name}>
              <button onClick={() => onMerchantRemove(name)}>x</button>
              {' '}
              <span>{name}</span>
            </div>
          )}
        </div>
        <br />
        {newsletter && merchants.length > 0 && <button onClick={() => onPurchaseBtnClick({ value: 5 }, true)}>Claim your bonus</button>}
      </section>
      
      <hr />

      <section>
        <h1>Get your extra bonus</h1>
        <h3>Your purchase value: ${user.wallet}</h3>
        <br />
        <p></p>
        <div className={styles.progressBar} style={{ marginBottom: '20px' }}>
          <div className={styles.progressBarInner} style={{ width: `${user.wallet}%` }}></div>
          <div className={`${styles.firstItem} ${user.wallet >= 10 ? styles.active1 : ''}`} style={{ left: '10%', top: '-40px' }}>
          $10
          </div>
          <div className={`${styles.firstItemIcon} ${user.wallet >= 10 ? styles.active : ''}`} style={{ left: '10%' }}>
          <span className={styles.icon}>{user.wallet >= 10 ? '✔' : '🛒'}</span>
          </div>
          <div className={`${styles.secondItem} ${user.wallet >= 50 ? styles.active1 : ''}`} style={{ left: '50%', top: '-40px' }}>
          $50
          </div>
          <div className={`${styles.secondItemIcon} ${user.wallet >= 50 ? styles.active : ''}`} style={{ left: '50%' }}>
          <span className={styles.icon}>{user.wallet >= 50 ? '✔' : '🛒'}</span>
          </div>
          <div className={`${styles.lastItem} ${user.wallet >= 90 ? styles.active2 : ''}`} style={{ left: '90%', top: '-40px' }}>
          $100
          </div>
          <div className={`${styles.lastItemIcon} ${user.wallet >= 90 ? styles.active : ''}`} style={{ left: '90%' }}>
          <span className={styles.icon}>{user.wallet >= 90 ? '✔' : '🛒'}</span>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.retailersList}>
        {retailers.map(retailer =>
        <div key={retailer.id} className={styles.retailerCard}>
          <img src={retailer.cover} alt="" />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={retailer.logo} alt="" style={{ height: '60px' }} />
          </div>
          <h4 style={{ padding: '0 20px 0'}}>Up to {(retailer.customerComm / retailer.gsgComm * 100).toFixed(0)}% cashback</h4>
          <p style={{ padding: '10px 20px' }}>{retailer.desc}</p>
          <button onClick={() => onPurchaseBtnClick(retailer, false)}>Purchase</button>
        </div>
        )}
        </div>
      </section>
    </main>
  );
}
