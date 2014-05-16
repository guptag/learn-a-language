(ns linq.restrictions
  (:require [linq.data :refer :all]))


#_(-------------------------------
  ;; filter all numbers < 5

  ;; public void Linq1()
  ;; {
  ;;      int[] numbers = { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
  ;;
  ;;      var lowNums =
  ;;          from n in numbers
  ;;          where n < 5
  ;;          select n;
  ;;
  ;;      Console.WriteLine("Numbers < 5:");
  ;;      foreach (var x in lowNums)
  ;;      {
  ;;          Console.WriteLine(x);
  ;;      }
  ;; }
---------------------------------)

(defn linq1 []
  (let [numbers [5 4 1 3 9 8 6 7 2 0]
        numbers-lessthan-five (filter #(< % 5) numbers)]
    (println "Numbers < 5")
    (doseq [n numbers-lessthan-five]
      (println n))))

;;(linq1)









#_(-------------------------------

  ;; find all products that are out of stock

  ;; public void Linq2()
  ;; {
  ;;      List<Product> products = GetProductList();
  ;;
  ;;      var soldOutProducts =
  ;;          from p in products
  ;;          where p.UnitsInStock == 0
  ;;          select p;
  ;;
  ;;    Console.WriteLine("Sold out products:");
  ;;      foreach (var product in soldOutProducts)
  ;;      {
  ;;          Console.WriteLine("{0} is sold out!", product.ProductName);
  ;;      }
  ;; }

   ---------------------------------)

(defn linq2 []
  (let [all-products products-list
       sold-out-products (for [p all-products
                                :when (= 0 (:units-in-stock p))]
                          p)]
    (println "Sold out products:")
    (doseq [p sold-out-products]
      (println (:product-name p) " is sold out"))))

;;(linq2)






#_(-------------------------------
  ;; find all products in stock and greate than $3

  ;; public void Linq3()
  ;; {
  ;;      List<Product> products = GetProductList();
  ;;
  ;;      var expensiveInStockProducts =
  ;;          from p in products
  ;;          where p.UnitsInStock > 0 && p.UnitPrice > 3.00M
  ;;          select p;
  ;;
  ;;      Console.WriteLine("In-stock products that cost more than 3.00:");
  ;;      foreach (var product in expensiveInStockProducts)
  ;;      {
  ;;          Console.WriteLine("{0} is in stock and costs more than 3.00.", product.ProductName);
  ;;      }
  ;; }
 ---------------------------------)

(defn linq3 []
  (let [all-products products-list
        filtered-in-stock-products
        (for [p all-products
              :when (and
                     (> (:units-in-stock p) 0)
                     (> (:unit-price p) 3))]
         p )]
    (println "Products that are in stock and costs more than $3")
    (doseq [p filtered-in-stock-products]
      (println (:product-name p) "is in stock and costs more than $3"))))

;; (linq3)







#_(-------------------------------

  ;; Customers living in WA and their orders

  ;; public void Linq4()
  ;; {
  ;;      List<Customer> customers = GetCustomerList();
  ;;
  ;;      var waCustomers =
  ;;          from c in customers
  ;;          where c.Region == "WA"
  ;;          select c;
  ;;
  ;;      Console.WriteLine("Customers from Washington and their orders:");
  ;;      foreach (var customer in waCustomers)
  ;;      {
  ;;          Console.WriteLine("Customer {0}: {1}", customer.CustomerID, customer.CompanyName);
  ;;          foreach (var order in customer.Orders)
  ;;          {
  ;;              Console.WriteLine("  Order {0}: {1}", order.OrderID, order.OrderDate);
  ;;          }
  ;;      }
  ;;  }
 ---------------------------------)

(defn linq4 []
  (let [customers customers-list
        customers-in-wa (filter #(= (:region %) "WA") customers)]
   (println "Customers from Washington and their orders")
    (doseq [c customers-in-wa]
        (println "Customer" (:customer-id c) ": " (:company-name c))
        (doseq [order (:orders c)]
          (println "   Order" (:order-id order) ":" (:order-date order) ":" (:total order))))))

;; (linq4)









#_(-------------------------------

  ;; Indexed Where clause that returns digits whose name is shorter than their value.

  ;; public void Linq5()
  ;; {
  ;;      string[] digits = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
  ;;
  ;;      var shortDigits = digits.Where((digit, index) => digit.Length < index);
  ;;
  ;;      Console.WriteLine("Short digits:");
  ;;      foreach (var d in shortDigits)
  ;;      {
  ;;          Console.WriteLine("The word {0} is shorter than its value.", d);
  ;;      }
  ;;  }
---------------------------------)

(defn linq5 []
  (let [digits ["zero" "one" "two" "three" "four" "five" "six" "seven" "eight" "nine"]
        short-digits
        (for [[index digit] (map-indexed vector digits)
             :when (> index (count digit))]
         digit)]
   (println "Short digits: ")
   (doseq [d short-digits]
     (println "The word" d "is shorter than its value"))))

;; (linq5)

(def examples [linq1 linq2 linq3 linq4 linq5])
