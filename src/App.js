import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

const remainingContacts = [...contacts];
const initAgenda = remainingContacts.splice(0, 5);

function App() {
  const [agenda, setAgenda] = useState(initAgenda);
  console.log(agenda);

  const addContact = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1);
    //const randomContact = remainingContacts[randomIndex];//It will also return a random contact but won't modify array

    setAgenda(agenda.concat(randomContact));
    //setAgenda([...agenda.randomContact])
  };
  const removeContact = (index) => {
    const newList = agenda.slice();
    newList.splice(index, 1);
    setAgenda(newList)

  }
  

  const sortByName = () => {
    const sortedContacts = remainingContacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setAgenda(sortedContacts);
  };

  const sortByPop = () => {
    const sortedContacts = remainingContacts.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    setAgenda(sortedContacts);
  };

  return (
    <>
      <h1>IRONCONTACTS</h1>
      <button onClick={addContact}>Add contact</button>
      <button onClick={sortByName}>sort by AZ</button>
      <button onClick={sortByPop}>sort by Popularity</button>

      <div className="App">
        ;
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Oscar Winner</th>
              <th>Emmy Winner</th>
            </tr>
          </thead>
          <tbody>
            {agenda.map((contact, index) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      src={contact.pictureUrl}
                      alt={contact.name}
                      width="100px"
                      height="150px"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar && "🏆 "}</td>
                  <td>{contact.wonEmmy && "🏆 "}</td>
                  <td><button onClick={()=> removeContact(index)}>Delete</button></td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default App;
