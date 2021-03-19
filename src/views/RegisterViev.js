import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

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

export default function RegisterView () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

    /*const onRegister = () =>
     dispatch(authOperations.register());*/

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({name, email, password}));
    //onRegister({name, email, password});

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
        <h1>Страница регистрации</h1>

        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Имя
          <input type="text" name="name" value={name} onChange={handleChangeName} />
          </label>

          <label style={styles.label}>
            Почта
          <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>

          <label style={styles.label}>
            Пароль
          <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
  );
};

/*
class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Страница регистрации</h1>

        <form onSubmit={this.handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Имя
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>

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

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  };
};

const mapDispathToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispathToProps)(RegisterView);
*/