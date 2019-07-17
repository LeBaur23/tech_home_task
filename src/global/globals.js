const StoragePlugin = {
  install: function (Vue, options) {
    Vue.prototype.$changeSotrage = function (storageName, storageValue) {
      localStorage.setItem(storageName, JSON.stringify(storageValue));
    }
    Vue.prototype.$clearStorage = function () {
      localStorage.clear();
    }
  }
}

export default StoragePlugin
