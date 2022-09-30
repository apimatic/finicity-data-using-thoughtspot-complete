/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CategoriesEnum
 */
export enum CategoriesEnum {
  ATMFee = 'ATM Fee',
  Advertising = 'Advertising',
  AirTravel = 'Air Travel',
  AlcoholBars = 'Alcohol & Bars',
  Allowance = 'Allowance',
  Amusement = 'Amusement',
  Arts = 'Arts',
  AutoTransport = 'Auto & Transport',
  AutoInsurance = 'Auto Insurance',
  AutoPayment = 'Auto Payment',
  BabySupplies = 'Baby Supplies',
  BabysitterDaycare = 'Babysitter & Daycare',
  BankFee = 'Bank Fee',
  BillsUtilities = 'Bills & Utilities',
  Bonus = 'Bonus',
  Books = 'Books',
  BooksSupplies = 'Books & Supplies',
  BusinessServices = 'Business Services',
  Buy = 'Buy',
  CashATM = 'Cash & ATM',
  Charity = 'Charity',
  Check = 'Check',
  ChildSupport = 'Child Support',
  Clothing = 'Clothing',
  CoffeeShops = 'Coffee Shops',
  CreditCardPayment = 'Credit Card Payment',
  Dentist = 'Dentist',
  Deposit = 'Deposit',
  DividendCapGains = 'Dividend & Cap Gains',
  Doctor = 'Doctor',
  Education = 'Education',
  ElectronicsSoftware = 'Electronics & Software',
  Entertainment = 'Entertainment',
  Eyecare = 'Eyecare',
  FastFood = 'Fast Food',
  FederalTax = 'Federal Tax',
  FeesCharges = 'Fees & Charges',
  FinanceCharge = 'Finance Charge',
  Financial = 'Financial',
  FinancialAdvisor = 'Financial Advisor',
  FoodDining = 'Food & Dining',
  Furnishings = 'Furnishings',
  GasFuel = 'Gas & Fuel',
  Gift = 'Gift',
  GiftsDonations = 'Gifts & Donations',
  Groceries = 'Groceries',
  Gym = 'Gym',
  Hair = 'Hair',
  HealthFitness = 'Health & Fitness',
  HealthInsurance = 'Health Insurance',
  Hobbies = 'Hobbies',
  Home = 'Home',
  HomeImprovement = 'Home Improvement',
  HomeInsurance = 'Home Insurance',
  HomePhone = 'Home Phone',
  HomeServices = 'Home Services',
  HomeSupplies = 'Home Supplies',
  Hotel = 'Hotel',
  Income = 'Income',
  InterestIncome = 'Interest Income',
  Internet = 'Internet',
  Investments = 'Investments',
  Kids = 'Kids',
  KidsActivities = 'Kids Activities',
  LateFee = 'Late Fee',
  Laundry = 'Laundry',
  LawnGarden = 'Lawn & Garden',
  Legal = 'Legal',
  LifeInsurance = 'Life Insurance',
  LoanFeesAndCharges = 'Loan Fees and Charges',
  LoanInsurance = 'Loan Insurance',
  LoanInterest = 'Loan Interest',
  LoanPayment = 'Loan Payment',
  LoanPrincipal = 'Loan Principal',
  Loans = 'Loans',
  LocalTax = 'Local Tax',
  LowBalance = 'Low Balance',
  MobilePhone = 'Mobile Phone',
  MortgageRent = 'Mortgage & Rent',
  MoviesDVDs = 'Movies & DVDs',
  Music = 'Music',
  NewspapersMagazines = 'Newspapers & Magazines',
  OfficeSupplies = 'Office Supplies',
  Parking = 'Parking',
  Paycheck = 'Paycheck',
  PersonalCare = 'Personal Care',
  PetFoodSupplies = 'Pet Food & Supplies',
  PetGrooming = 'Pet Grooming',
  Pets = 'Pets',
  Pharmacy = 'Pharmacy',
  Printing = 'Printing',
  PropertyTax = 'Property Tax',
  PublicTransportation = 'Public Transportation',
  Reimbursement = 'Reimbursement',
  RentalCarTaxi = 'Rental Car & Taxi',
  Restaurants = 'Restaurants',
  SalesTax = 'Sales Tax',
  Sell = 'Sell',
  ServicesParts = 'Services & Parts',
  ServiceFee = 'Service Fee',
  Shipping = 'Shipping',
  Shopping = 'Shopping',
  SpaMassage = 'Spa & Massage',
  SportingGoods = 'Sporting Goods',
  Sports = 'Sports',
  StateTax = 'State Tax',
  StreamingServices = 'Streaming Services',
  StudentLoan = 'Student Loan',
  Taxes = 'Taxes',
  Television = 'Television',
  Toys = 'Toys',
  TradeCommissions = 'Trade Commissions',
  Transfer = 'Transfer',
  TransferForCashSpending = 'Transfer for Cash Spending',
  Travel = 'Travel',
  Tuition = 'Tuition',
  Uncategorized = 'Uncategorized',
  Utilities = 'Utilities',
  Vacation = 'Vacation',
  Veterinary = 'Veterinary',
  InternetBroadbandCharges = 'Internet / Broadband Charges',
}

/**
 * Schema for CategoriesEnum
 */
export const categoriesEnumSchema: Schema<CategoriesEnum> = stringEnum(CategoriesEnum);