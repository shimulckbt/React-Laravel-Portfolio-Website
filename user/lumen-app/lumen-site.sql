-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2021 at 03:42 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_site`
--

-- --------------------------------------------------------

--
-- Table structure for table `chart_data`
--

CREATE TABLE `chart_data` (
  `technology` varchar(1000) NOT NULL,
  `projects` varchar(1000) NOT NULL,
  `id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chart_data`
--

INSERT INTO `chart_data` (`technology`, `projects`, `id`) VALUES
('HTML', '100', 1),
('CSS', '95', 2),
('Sql', '70', 3),
('Bootstrap', '95', 4),
('React', '80', 5),
('Vue', '50', 6),
('C', '60', 7),
('PHP', '70', 8);

-- --------------------------------------------------------

--
-- Table structure for table `client_review`
--

CREATE TABLE `client_review` (
  `id` int(255) NOT NULL,
  `client_img` varchar(1000) NOT NULL,
  `client_title` varchar(1000) NOT NULL,
  `client_description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `client_review`
--

INSERT INTO `client_review` (`id`, `client_img`, `client_title`, `client_description`) VALUES
(1, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'Web Development', 'There are approximately 20 million more interesting activities than removing backgrounds by hand.Thanks to remove.bg\'s clever AI, you can slash editing time - and have more fun!'),
(2, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'Web Development', 'There are approximately 20 million more interesting activities than removing backgrounds by hand.Thanks to remove.bg\'s clever AI, you can slash editing time - and have more fun!'),
(3, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'Web Development', 'There are approximately 20 million more interesting activities than removing backgrounds by hand.Thanks to remove.bg\'s clever AI, you can slash editing time - and have more fun!'),
(4, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'Web Development', 'There are approximately 20 million more interesting activities than removing backgrounds by hand.Thanks to remove.bg\'s clever AI, you can slash editing time - and have more fun!');

-- --------------------------------------------------------

--
-- Table structure for table `contact_table`
--

CREATE TABLE `contact_table` (
  `id` int(255) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact_table`
--

INSERT INTO `contact_table` (`id`, `name`, `email`, `message`) VALUES
(1, 'Shimul', 'shimul@gmail.com', 'I am Shimul'),
(2, 'Pussy', 'pussy@gmail.com', 'ok done'),
(3, 'Pussy1', 'pussy1@gmail.com', 'not ok'),
(4, 'Shimul', 'shimulckbt101@gmail.com', 'ok'),
(5, 'Pradip Chakraborty', 'prodip@gmail.com', 'I am your dad'),
(6, 'Tutul Chakraborty', 'tutul@gmail.com', 'I am tutul'),
(7, '', '', ''),
(8, '', '', ''),
(9, 'baal', 'baak@gmail.com', 'ajshbdkashgkjbaskj'),
(10, 'Karim', 'Karim@gmail.com', 'yfuygfujhgiuyg');

-- --------------------------------------------------------

--
-- Table structure for table `course_table`
--

CREATE TABLE `course_table` (
  `id` int(255) NOT NULL,
  `short_title` varchar(1000) NOT NULL,
  `short_description` varchar(1000) NOT NULL,
  `small_img` varchar(1000) NOT NULL,
  `long_title` varchar(1000) NOT NULL,
  `long_description` text NOT NULL,
  `total_lectures` varchar(1000) NOT NULL,
  `total_students` varchar(1000) NOT NULL,
  `skill_all` text NOT NULL,
  `video_url` varchar(1000) NOT NULL,
  `course_link` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course_table`
--

INSERT INTO `course_table` (`id`, `short_title`, `short_description`, `small_img`, `long_title`, `long_description`, `total_lectures`, `total_students`, `skill_all`, `video_url`, `course_link`) VALUES
(1, 'Web Development', '\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone', 'https://pixabay.com/photos/lightning-thunderstorm-rural-field-6383992/', 'Web Development Full Online Course', '\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone', '50', '50', '<ul>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                            </ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'www.react.rabbil.com'),
(2, 'Web Development', '\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone', 'https://pixabay.com/photos/lightning-thunderstorm-...', 'Web Development Full Online Course', '\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone', '50', '50', '<ul>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                            </ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'www.react.rabbil.com'),
(3, 'Web Development', '\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone', 'https://pixabay.com/photos/lightning-thunderstorm-...', 'Web Development Full Online Course', '\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone', '50', '50', '<ul>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                            </ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'www.react.rabbil.com'),
(4, 'Web $ Development', '\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone', 'https://pixabay.com/photos/lightning-thunderstorm-...', 'Web Development Full Online Course', '\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone', '50', '50', '<ul>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                            </ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'www.react.rabbil.com'),
(5, 'Web Development ok', '\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone', 'https://pixabay.com/photos/lightning-thunderstorm-...', 'Web Development Full Online Course', '\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone\nIn general, Android SMS are stored in a database in the data folder located in the internal memory of the Android phone', '50', '50', '<ul>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                            </ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'www.react.rabbil.com');

-- --------------------------------------------------------

--
-- Table structure for table `footer_table`
--

CREATE TABLE `footer_table` (
  `id` int(255) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `phone` varchar(1000) NOT NULL,
  `facebook` varchar(1000) NOT NULL,
  `youtube` varchar(1000) NOT NULL,
  `footer_credit` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `footer_table`
--

INSERT INTO `footer_table` (`id`, `address`, `email`, `phone`, `facebook`, `youtube`, `footer_credit`) VALUES
(1, '#33 no ward, Firingee Bazar, Yakub Nagar, Kotowali, Chittagong.', 'shimul101@gmail.com', '01786227277', 'www.facebook.com', 'www.youtube.com', '<a className=\"copyrightLink\" href=\"#\">ShimulChakraborty.com &copy; 2021-2022</a>');

-- --------------------------------------------------------

--
-- Table structure for table `home_etc`
--

CREATE TABLE `home_etc` (
  `id` int(255) NOT NULL,
  `home_title` varchar(1000) NOT NULL,
  `home_subtitle` varchar(1000) NOT NULL,
  `tech_description` text NOT NULL,
  `total_projects` varchar(1000) NOT NULL,
  `total_clients` varchar(1000) NOT NULL,
  `video_description` text NOT NULL,
  `video_url` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `home_etc`
--

INSERT INTO `home_etc` (`id`, `home_title`, `home_subtitle`, `tech_description`, `total_projects`, `total_clients`, `video_description`, `video_url`) VALUES
(1, 'SOFTWARE ENGINEER D', 'Mobile & Web Application D', '<p>We\'ve built tools and plugins for some of the most popular design programs, eCommerce sites and computer environments.</p> <p>To bring more digital efficiency to your own workflow, use our API!We\'ve built tools and plugins for some of the most popular design programs, eCommerce sites and computer environments.</p> <p>To bring more digital efficiency to your own workflow, use our API!</p>', '100', '100', 'We\'ve built tools and plugins for some of the most popular design programs, eCommerce sites and computer environments. To bring more digital efficiency to your own workflow, use our API!We\'ve built tools and plugins for some of the most popular design programs, eCommerce sites and computer environments. To bring more digital efficiency to your own workflow, use our API!', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `information_etc`
--

CREATE TABLE `information_etc` (
  `id` int(255) NOT NULL,
  `about` text NOT NULL,
  `refund` text NOT NULL,
  `terms` text NOT NULL,
  `privacy` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `information_etc`
--

INSERT INTO `information_etc` (`id`, `about`, `refund`, `terms`, `privacy`) VALUES
(1, '<h1 className=\"serviceName\">Who i Am</h1>\r\n                            <hr/>\r\n                            <p className=\"serviceDescription\">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects </p>\r\n                            <h1 className=\"serviceName\">My Mission</h1>\r\n                            <hr/>\r\n                            <p className=\"serviceDescription\">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects </p>\r\n                            <h1 className=\"serviceName\">My Vision</h1>\r\n                            <hr/>\r\n                            <p className=\"serviceDescription\">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects </p>', '<p className=\"serviceDescription\">\r\n                                Unless you have entered into an express written contract with this website to the contrary, visitors, viewers, subscribers, members, affiliates, or customers have no right to use this information in a commercial or public setting; they have no right to broadcast it, copy it, save it, print it, sell it, or publish any portions of the content of this website. By accessing the contents of this website, you agree to this condition of access and you acknowledge that any unauthorized use is unlawful and may subject you to civil or criminal penalties. Again, Visitor has no rights whatsoever to use the content of, or portions thereof, including its databases, invisible pages, linked pages, underlying code, or other intellectual property the site may contain, for any reason or for any use whatsoever. In recognition of the fact that it may be difficult to quantify the exact damages arising from infringement of this provision, Visitor agrees to compensate the owners of this site with liquidated damages in the amount of U.S. $100,000, or, if it can be calculated, the actual costs and actual damages for breach of this provision, whichever is greater. Visitor warrants that he or she understands that accepting this provision is a condition of accessing this site and that accessing this site constitutes acceptance.\r\n                            </p>', '<ul>\r\n                                <li>First 30 Days Money Back!</li>\r\n                                <li>THIS IS NOT A BUY-AND-TRY PRODUCT</li>\r\n                                <li>Refund is applicable for software and plugins, if the products aren\'t functioning, producing errors or you haven\'t received access to them at any time during the first 30 days after purchase, please get in touch with our support team immediately. If we are unable to provide you a working solution within 3 business days, simply delete all digital files and license keys you obtained from us, and ask for a full refund. You will get your refund processed within 30 days or early. That\'s a firm promise and commitment.</li>\r\n                                <li>After 30 Days : There is no refund offered after the first 30 days.</li>\r\n                                <li>To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.</li>\r\n                                <li>Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights law.</li>\r\n                            </ul>', '<p className=\"serviceDescription\">\r\n                                Unless you have entered into an express written contract with this website to the contrary, visitors, viewers, subscribers, members, affiliates, or customers have no right to use this information in a commercial or public setting; they have no right to broadcast it, copy it, save it, print it, sell it, or publish any portions of the content of this website. By accessing the contents of this website, you agree to this condition of access and you acknowledge that any unauthorized use is unlawful and may subject you to civil or criminal penalties. Again, Visitor has no rights whatsoever to use the content of, or portions thereof, including its databases, invisible pages, linked pages, underlying code, or other intellectual property the site may contain, for any reason or for any use whatsoever. In recognition of the fact that it may be difficult to quantify the exact damages arising from infringement of this provision, Visitor agrees to compensate the owners of this site with liquidated damages in the amount of U.S. $100,000, or, if it can be calculated, the actual costs and actual damages for breach of this provision, whichever is greater. Visitor warrants that he or she understands that accepting this provision is a condition of accessing this site and that accessing this site constitutes acceptance.\r\n                            </p>');

-- --------------------------------------------------------

--
-- Table structure for table `project_table`
--

CREATE TABLE `project_table` (
  `id` int(255) NOT NULL,
  `img_one` varchar(1000) NOT NULL,
  `img_two` varchar(1000) NOT NULL,
  `project_name` varchar(1000) NOT NULL,
  `short_description` varchar(1000) NOT NULL,
  `project_features` text NOT NULL,
  `live_preview` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `project_table`
--

INSERT INTO `project_table` (`id`, `img_one`, `img_two`, `project_name`, `short_description`, `project_features`, `live_preview`) VALUES
(1, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'Integrates with your Software Workflow', 'The API works like a charm and the processed images are stunningly good. We will keep on using this product for sure.', '<ul>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                            </ul>', 'www.youtube.com'),
(2, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'Foll Bazar', 'The API works like a charm and the processed images are stunningly good. We will keep on using this product for sure.', '<ul>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                            </ul>', 'www.youtube.com'),
(3, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'Integrates with your Software Workflow', 'The API works like a charm and the processed images are stunningly good. We will keep on using this product for sure.', '<ul>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                            </ul>', 'www.youtube.com'),
(4, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.remove.bg%2F&psig=AOvVaw2nH5rBXl-AahnaUhSwIqYI&ust=1631445757703000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDa3pfn9vICFQAAAAAdAAAAABAD', 'Integrates with your Software Workflow', 'The API works like a charm and the processed images are stunningly good. We will keep on using this product for sure.', '<ul>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                                <li className=\"serviceDescription\">Unlimited Dynamic Product Category</li>\n                            </ul>', 'www.youtube.com');

-- --------------------------------------------------------

--
-- Table structure for table `services_table`
--

CREATE TABLE `services_table` (
  `id` int(255) NOT NULL,
  `service_name` varchar(1000) NOT NULL,
  `service_description` varchar(1000) NOT NULL,
  `service_logo` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `services_table`
--

INSERT INTO `services_table` (`id`, `service_name`, `service_description`, `service_logo`) VALUES
(1, 'Web Development', 'We\'ve built tools and plugins for some of the most popular design programs, eCommerce sites and computer environments. To bring more digital efficiency to your own workflow, use our API!', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffavpng.com%2Fpng_view%2Flogo-graphic-design-royalty-free-illustration-png%2FH2GYr0Fn&psig=AOvVaw2F38hNi3ExXWs2VtC5LMo8&ust=1631553823016000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiAnPD5-fICFQAAAAAdAAAAABAT'),
(2, 'Mobile App Development', 'We\'ve built tools and plugins for some of the most popular design programs, eCommerce sites and computer environments. To bring more digital efficiency to your own workflow, use our API!', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffavpng.com%2Fpng_view%2Flogo-graphic-design-royalty-free-illustration-png%2FH2GYr0Fn&psig=AOvVaw2F38hNi3ExXWs2VtC5LMo8&ust=1631553823016000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiAnPD5-fICFQAAAAAdAAAAABAT'),
(3, 'Graphics Design', 'plugins for some of the most popular design programs, eCommerce sites and computer environments. To bring more digital efficiency to your own workflow, use our API!', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffavpng.com%2Fpng_view%2Flogo-graphic-design-royalty-free-illustration-png%2FH2GYr0Fn&psig=AOvVaw2F38hNi3ExXWs2VtC5LMo8&ust=1631553823016000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiAnPD5-fICFQAAAAAdAAAAABAT');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chart_data`
--
ALTER TABLE `chart_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_review`
--
ALTER TABLE `client_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_table`
--
ALTER TABLE `contact_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course_table`
--
ALTER TABLE `course_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_table`
--
ALTER TABLE `footer_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_etc`
--
ALTER TABLE `home_etc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `information_etc`
--
ALTER TABLE `information_etc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_table`
--
ALTER TABLE `project_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services_table`
--
ALTER TABLE `services_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chart_data`
--
ALTER TABLE `chart_data`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `client_review`
--
ALTER TABLE `client_review`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact_table`
--
ALTER TABLE `contact_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `course_table`
--
ALTER TABLE `course_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `footer_table`
--
ALTER TABLE `footer_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `home_etc`
--
ALTER TABLE `home_etc`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `information_etc`
--
ALTER TABLE `information_etc`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project_table`
--
ALTER TABLE `project_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `services_table`
--
ALTER TABLE `services_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
