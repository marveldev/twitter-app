const request = indexedDB.open('twitter', 3);

request.onsuccess = () => {
  const database = request.result;
  const transaction = database.transaction(['userData'], 'readwrite')
  const store = transaction.objectStore('userData');
}

request.onupgradeneeded = () => {
  const database = request.result;
  database.createObjectStore('userData', { autoIncrement: true });
  database.createObjectStore('tweet-item', { keyPath: 'tweetItemId' });
}

request.onerror = () => {
  console.log('request unsuccessful');
}

const addEntryToDb = (storeName, entry) => {
  const database = request.result;
  const transaction = database.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName)
  store.add(entry);

  transaction.oncomplete = () => {
    const message = document.querySelector('#message');
    message.style.display = 'block';

    setTimeout(function() {
      message.style.display = 'none';
    }, 4000);
  }

  transaction.onerror = () => {
    console.log(`error adding to ${storeName}`)
  }
}

const getEntryFromDb = (storeName) => {
  const data = new Promise((resolve, reject) => {
    const database = request.result
    const transaction = database.transaction([storeName]);
    const store = transaction.objectStore(storeName)
    const getData = store.getAll();

    getData.onsuccess = () => {
      resolve(getData.result)
    }

    getData.onerror = () => {
      console.log(`error adding to 'item'`)
      reject(getData.error);
    }
  })
  return Promise.resolve(data);
}

const clearAllEntries = (storeName) => {
  const database = request.result;
  const transaction = database.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  store.clear();
}

const deleteEntry = (storeName, entryId) => {
  const database = request.result;
  const transaction = database.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  store.delete(entryId)
}

export { request, addEntryToDb, clearAllEntries, getEntryFromDb, deleteEntry }