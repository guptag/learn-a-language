(ns linq.core
  (:require [linq.data :refer :all]
            [linq.restrictions :as restrictions]
            [linq.projections :as projections
            [linq.partitioning :as partitioning]]))

(defn run-examples [examples]
  (doseq [f examples] (f)))

(defn -main [& args]
  (run-examples restrictions/examples)
  (run-examples projections/examples)
  (run-examples partitioning/examples))


;;(-main)
