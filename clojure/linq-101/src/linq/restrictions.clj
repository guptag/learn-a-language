(ns linq.restrictions
  (:require [linq.data :refer :all]))


#_(-------------------------------
  ;; filter all numbers < 5
  ;;public void Linq1()
  ;;  {
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
  ;;  }


  ;; find all products that are out of stock
  ;; public void Linq2()
  ;;  {
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
  ;;  }

 ---------------------------------)


;; filter all numbers < 5
(defn linq1 []
  (let [numbers [5 4 1 3 9 8 6 7 2 0]
        numbers-lessthan-five (filter #(< % 5) numbers)]
    (println "Numbers < 5")
    (doseq [n numbers-lessthan-five]
      (println n))))

;;(linq1)


;; find all products that are out of stock
(defn linq2 []
  (let [all-products products-list
       sold-out-products (for [p all-products
                                :when (= 0 (:units-in-stock p))]
                          p)]
    (println "Sold out products:")
    (doseq [p sold-out-products]
      (println (:product-name p) " is sold out"))))

;;(linq2)

(def examples [linq1 linq2])