(ns linq.core
  (:require [linq.data :refer :all]
            [linq.restrictions :as restrictions]
            [linq.projections :as projections]))

(defn run-examples [examples]
  (doseq [f examples] (f)))

(defn -main [& args]
  (run-examples restrictions/examples)
  (run-examples projections/examples))


(-main)