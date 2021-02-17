const request = indexedDB.open('twitter', 3)

request.onsuccess = () => {
  const database = request.result
  const transaction = database.transaction(['user-data'], 'readwrite')
  const store = transaction.objectStore('user-data')
}

request.onupgradeneeded = () => {
  const database = request.result
  database.createObjectStore('user-data', { autoIncrement: true })
  database.createObjectStore('tweet-data', { keyPath: 'tweetItemId' })
  database.createObjectStore('comment-data', { autoIncrement: true })
}

request.onerror = () => {
  console.log('request unsuccessful')
}

const addEntryToDb = (storeName, entry) => {
  const database = request.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.add(entry)

  transaction.oncomplete = () => {
    // const message = document.querySelector('#message')
    // message.style.display = 'block'

    // setTimeout(function() {
    //   message.style.display = 'none'
    // }, 4000)
    console.log('success');
  }

  transaction.onerror = () => {
    console.log(`error adding to ${storeName}`)
  }
}

const getEntryFromDb = (storeName, id) => {
  const data = new Promise((resolve, reject) => {
    const database = request.result
    const transaction = database.transaction([storeName])
    const store = transaction.objectStore(storeName)
    const getData = id ? store.get(id) : store.getAll()

    getData.onsuccess = () => {
      resolve(getData.result)
    }

    getData.onerror = () => {
      console.log(`error adding to 'item'`)
      reject(getData.error)
    }
  })
  return Promise.resolve(data)
}

const clearAllEntries = (storeName) => {
  const database = request.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.clear()
}

const deleteEntry = (storeName, entryId) => {
  const database = request.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.delete(entryId)
}

export { request, addEntryToDb, clearAllEntries, getEntryFromDb, deleteEntry }
