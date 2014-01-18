(ns linq.core
  (:require [linq.data :refer :all]
            [linq.restrictions :as restrictions]))

(defn run-examples [examples]
  (doseq [f examples] (f)))

(defn -main [& args]
  (run-examples restrictions/examples))


(-main)