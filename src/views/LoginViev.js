import React, {useState } from 'react';
import { authOperations } from '../redux/auth';
import { useDispatch } from 'react-redux';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView () {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();

const handleChange = evt => {
  const{ name, value } = evt.target;

  switch(name) {
    case 'email':
      setEmail(value);
      break;

      case 'password':
        setPassword(value);
        break;  

        default:
          console.warn('Тип поля name - ${name} не обрабатывается');
  }
};

const handleSubmit = e => {
  e.preventDefault();

  dispatch(authOperations.logIn({email, password})); 

  setEmail({ email: '' });
  setPassword({ password: '' });
};

  return (
    <div>
    <h1>Страница логина</h1>

    <form
      onSubmit={handleSubmit}
      style={styles.form}
      autoComplete="off">

      <label style={styles.label}>
        Почта
      <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label style={styles.label}>
        Пароль
      <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Войти</button>
    </form>
  </div> 
  )
}

/*
class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Страница логина</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off">

          <label style={styles.label}>
            Почта
          <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
          <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    );
  };
};

const mapDispathToProps = {
  onLogin: authOperations.logIn,
}

export default connect(null, mapDispathToProps)(LoginView);
*/