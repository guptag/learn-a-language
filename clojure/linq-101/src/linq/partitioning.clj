(ns linq.partitioning
  (:require [linq.data :refer :all]))



#_(-------------------------------

;; Get only the first 3 elements of the array.

;; public void Linq20()
;; {
;;    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
;;    var first3Numbers = numbers.Take(3);
;;    Console.WriteLine("First 3 numbers:");
;;    foreach (var n in first3Numbers)
;;    {
;;        Console.WriteLine(n);
;;    }
;; }
-----------------------------------)

(defn linq20 []
  (let [numbers [5 4 1 3 9 8 6 7 2 0]
        first-3-numbers (take 3 numbers)]
    (println "First 3 numbers:")
    (doseq [n first-3-numbers] (println n))))


;;(linq20)







#_(-------------------------------

;; Get the first 3 orders from customers in Washington.

;; public void Linq21()
;; {
;;    List<Customer> customers = GetCustomerList();
;;    var first3WAOrders = (
;;        from c in customers
;;        from o in c.Orders
;;        where c.Region == "WA"
;;        select new { c.CustomerID, o.OrderID, o.OrderDate })
;;        .Take(3);
;;    Console.WriteLine("First 3 orders in WA:");
;;    foreach (var order in first3WAOrders)
;;    {
;;        ObjectDumper.Write(order);
;;    }
;;}
-----------------------------------)

(defn linq21 []
  (let [customers customers-list
        first3-wa-orders
        (take 3
           (for [c customers
                  :when (= (:region c) "WA")
                  o (:orders c)]
              {:customer-id (:customer-id c)
               :order-id (:order-id o)
               :order-date (:order-date o)}))]
    (doseq [order first3-wa-orders ] (println order))))


;;(linq21)






#_(-------------------------------

;; Skip to get all but the first 4 elements of the array.

;; public void Linq22()
;; {
;;    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
;;    var allButFirst4Numbers = numbers.Skip(4);
;;    Console.WriteLine("All but first 4 numbers:");
;;    foreach (var n in allButFirst4Numbers)
;;    {
;;        Console.WriteLine(n);
;;    }
;; }
-----------------------------------)

(defn linq22 []
  (let [numbers [5 4 1 3 9 8 6 7 2 0]
        all-but-first-four (drop 4 numbers)]
    (println "All but first 4 numbers:")
    (doseq [n all-but-first-four] (println n))))

;;(linq22)






#_(-------------------------------

;; Get all but the first 2 orders from customers in Washington

;; public void Linq23()
;; {
;;    List<Customer> customers = GetCustomerList();
;;    var waOrders =
;;        from c in customers
;;        from o in c.Orders
;;        where c.Region == "WA"
;;        select new { c.CustomerID, o.OrderID, o.OrderDate };
;;    var allButFirst2Orders = waOrders.Skip(2);
;;    Console.WriteLine("All but first 2 orders in WA:");
;;    foreach (var order in allButFirst2Orders)
;;    {
;;        ObjectDumper.Write(order);
;;    }
;; }
-----------------------------------)

(defn linq23 []
  (let [customers customers-list
        all-but-first-two-orders
        (drop 2
          (for [c customers
                :when (= (:region c) "WA")
                o (:orders c)]
            {:customer-id (:customer-id c)
             :order-id (:order-id o)
             :order-date (:order-date o)}))]
    (doseq [order all-but-first-two-orders] (println order))))

(linq24)







#_(-------------------------------------

;; Elements starting from the beginning of the array
;; until a number is hit that is not less than 6.

;; public void Linq24()
;; {
;;    int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
;;    var firstNumbersLessThan6 = numbers.TakeWhile(n => n < 6);
;;    Console.WriteLine("First numbers less than 6:");
;;    foreach (var n in firstNumbersLessThan6)
;;    {
;;        Console.WriteLine(n);
;;    }
;;}
---------------------------------------)

(defn linq24 []
  (let [numbers [5 4 1 3 9 8 6 7 2 0]
        first-numbers-lessthan-six (take-while #(<= %1 6) numbers)]
    (println "First numbers less than 6:")
    (doseq [n first-numbers-lessthan-six]
      (println n))))

(linq24)





































(def examples [linq20 linq21 linq22 linq23])
