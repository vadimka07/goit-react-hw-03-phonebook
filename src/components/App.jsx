import React, { Component } from 'react';
import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import PropTypes from 'prop-types';

export class App extends Component {
    state = {
        contacts: [
            {
                id: 'id-1',
                name: 'Rosie Simpson',
                number: '459-12-56',
            },
            {
                id: 'id-2',
                name: 'Hermione Kline',
                number: '443-89-12',
            },
            {
                id: 'id-3',
                name: 'Eden Clements',
                number: '645-17-79',
            },
            {
                id: 'id-4',
                name: 'Annie Copeland',
                number: '227-91-26',
            },
        ],
        filter: '',
    };

    formSubmitHandler = dataForm => {
        if (this.checkUser(dataForm)) {
            return alert(dataForm.name + 'is already is contacts');
        }
        this.setState(prevState => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: nanoid(),
                        name: dataForm.name,
                        number: dataForm.number,
                    },
                ],
            };
        });
    };

    checkUser = data => {
        return this.state.contacts.some(({ name }) => name === data.name);
    };

    handlerFilter = e => {
        this.setState({
            filter: e.target.value,
        });
    };

    filterData = () => {
        const { contacts, filter } = this.state;
        const filterNormalized = filter.toLowerCase();
        return contacts.filter(item =>
            item.name.toLowerCase().includes(filterNormalized)
        );
    };

    deleteContact = id => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(item => item.id !== id),
            };
        });
    };

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);
        if(parsedContacts) {
            this.setState({
                contacts: parsedContacts
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts)
            );
        }
    }

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 40,
                    color: '#010101',
                    padding: 200,
                }}
            >
                <Title title="Phonebook" />
                <ContactForm onSubmit={this.formSubmitHandler} />
                <Title title="Contacts" />
                <Filter
                    onChange={this.handlerFilter}
                    value={this.state.filter}
                />
                <ContactList
                    listItems={this.filterData()}
                    onDelete={this.deleteContact}
                />
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    listItems: PropTypes.array,
    onDelete: PropTypes.func,
};
