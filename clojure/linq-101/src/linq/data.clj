(ns linq.data
  (:require [clojure.data.json :as json]
            [clj-time.local :as ltime]))


(defrecord Product [product-id product-name category unit-price units-in-stock])
(defrecord Customer [customer-id company-name address city region postal-code country phone fax orders])
(defrecord Order [order-id order-date total])


(def all-customers (json/read-str (slurp "resources/Customers.json")))

;;all-customers
(def customers-list

)
